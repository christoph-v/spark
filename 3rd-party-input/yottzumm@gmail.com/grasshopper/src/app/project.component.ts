import { Component } from '@angular/core';

import { Call } from './call.component'
let Peer = require('peerjs');
let MediaConnection = require('peerjs/lib/mediaconnection');

let peers = new Call();
let myStream = new MediaSource();

@Component({
	selector: 'project',
	templateUrl: './project.component.html',
})
export class ProjectVideoComponent {
    videoUrl: string;
    constructor() {
	if (navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia({audio:true, video:{width:1280,height:720}})
		.then(function(value: MediaStream) {
				(<HTMLVideoElement>document.getElementById('myvideo')).src = window.URL.createObjectURL(<MediaSource><unknown>value);
		})
		.catch(function(err) {
			  alert("Error getting User Media"+err);
		});
	}
	this.videoUrl = "me.mov";
    }
    answerCalls() {
	// let peer = new Peer(peers.getTeacherValue(), {key: 'mnd6i13qm362bj4i'});
	let peer = new Peer(peers.getTeacherValue(), {host: '52.10.34.169', port:9000});
	peer.on('call', function (answercall: typeof MediaConnection) {
		if (typeof myStream === 'undefined' || myStream === null) {
			alert("Cannot retrieve your video in answer");
		} else {
			answercall.answer(<MediaStream><unknown>myStream); // Answer the call with an A/V stream.
			answercall.on('stream', function(peerStream: MediaSource) {
				(<HTMLVideoElement>document.getElementById('peervideo')).src = window.URL.createObjectURL(peerStream);
			});
		}
	});
    }
    call() {
	// let peer = new Peer(peers.getStudentValue(), {key: 'mnd6i13qm362bj4i'});
	let peer = new Peer(peers.getStudentValue(), {host: '52.10.34.169', port:9000});
	if (myStream === null || typeof myStream === 'undefined' || myStream === null) {
		alert("Cannot retrieve your video in call");
	} else {
		let callteacher = <typeof MediaConnection>peer.call(peers.getTeacherValue(), myStream);
		callteacher.on('stream', function(peerStream: MediaSource) {
			(<HTMLVideoElement>document.getElementById('peervideo')).src = window.URL.createObjectURL(peerStream);
		});
	}
    }
}
