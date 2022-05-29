const proc = require('process');
const path = require('path');
const fs = require('fs');
const child_process = require('child_process');

// extract the base name of this .js to use it for config file
const appName = path.basename(proc.argv[1], '.js');
const appDir = path.dirname(proc.argv[1]);
const cfgName = appName + '.json';
const beautify = 4;

console.log('%s.js started', appName);
console.log('================================================================');
console.log('==========          SOMA OwnCloud Interface           ==========');
console.log('================================================================');
console.log('Config file = %s', cfgName);
console.log('Path: %s', appDir);

try {
    // check and analyse the arguments of the cmd line
    console.log('Analysing the command line...');
    const cmdOptions = analyseCmdLine(proc.argv);

    // if command is OK -> change the working dir of the node application
    proc.chdir(appDir);

    // process the command from the cmd line
    if (cmdOptions.command == 'init') {
        console.log('Creating the config (dummy!)');
        // createCfg(cfgName);
    }
    else {
        console.log('Reading the config...');
        let config = readCfg(cfgName);
        console.log('...Config successfully read = %s', JSON.stringify(config, null, beautify));

        const somaConfigPath = path.resolve(appDir, config.prefix, cmdOptions.user, config.suffix);
        console.log('Working on SOMA Config of user %s', cmdOptions.user);
        console.log('Path: %s', somaConfigPath);
        
        if (cmdOptions.command == 'create') {
            console.log('Creating the user...');
            createUser(cmdOptions.user, somaConfigPath);
        }
        
        console.log('Syncing the updated files...');
        let stdout = child_process.execSync(config.occ_cmd + ' ' + config.occ_scan_cmd, {cwd: config.occ_cwd});
        
        console.log('...occ reported following information\n' + stdout);
    }

} catch(err) {
    console.error(err);
    console.error('%s: aborting...', appName);
}

function analyseCmdLine (argv) {
    
    const usage = 'Usage:\n' +
                  '    ' + appName + ' init\n' +
                  '    ' + appName + ' <command> <user>\n' +
                  '  <command> = create\n' +
                  '  <user> = OwnCloud user ID'; 
    let result = {
                     command: 'create',
                     user: 'guest'
                 };
    
    try {

        // check the syntax of the command line
        if (argv.length < 3) {
            throw('need at least one argument in command line');
        } else if ((argv.length == 3) && (argv.at(2) != 'init')) {
            throw('command "' + appName + ' <param>" needs a second argument in command line');
        } else if (argv.length > 4) {
            throw('command "' + appName + '<param> <param>" has too many arguments in command line');
        }

        // set result from the command line
        if (argv.length == 3)
            result.command = 'init';
        else {
            result.command = argv.at(2);
            result.user = argv.at(3);
        }
        
    } catch (err) {
        console.error(err);
        console.log(usage);
        throw('cannot analyse command line');
    }

    console.log('...result = ' + JSON.stringify(result, null, beautify));
    
    return result;
}

function readCfg (cfgName) {

    try {
        rawConfig = fs.readFileSync(cfgName);
        return JSON.parse(rawConfig);
    } catch (err) {
        console.error(err);
        throw('cannot read configuration');
    }
}

function createUser (uid, cfgPath) {
    
    try {
        const somaConfig = {
            user: uid,
        };
    
        rawSomaConfig = JSON.stringify(somaConfig, null, beautify);
    
        fs.writeFileSync(cfgPath, rawSomaConfig, {mode: 0o644});
    } catch (err) {
        console.error(err);
        throw('cannot write SOMA config for user ' + uid);
    }
    
}
