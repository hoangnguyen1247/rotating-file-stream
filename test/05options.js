/* jshint mocha: true */
"use strict";

var assert = require("assert");
var fs = require("fs");
var rfs = require("./helper");

describe("options", function() {
	describe("size KiloBytes", function() {
		before(function(done) {
			this.rfs = rfs(done, { size: "10K" });
			this.rfs.end();
		});

		it("10K", function() {
			assert.equal(this.rfs.options.size, 10240);
		});
	});

	describe("size MegaBytes", function() {
		before(function(done) {
			this.rfs = rfs(done, { size: "10M" });
			this.rfs.end();
		});

		it("10M", function() {
			assert.equal(this.rfs.options.size, 10485760);
		});
	});

	describe("size GigaBytes", function() {
		before(function(done) {
			this.rfs = rfs(done, { size: "10G" });
			this.rfs.end();
		});

		it("10G", function() {
			assert.equal(this.rfs.options.size, 10737418240);
		});
	});

	describe("interval minutes", function() {
		before(function(done) {
			var self = this;
			var doIt = function() {
				self.rfs = rfs(done, { interval: "3m" });
				self.rfs.end();
			};

			var now = new Date().getTime();
			var sec = parseInt(now / 1000) * 1000;

			if(now - sec < 900)
				return doIt();

			setTimeout(doIt, 101);
		});

		it("3'", function() {
			assert.equal(this.rfs.options.interval.num, 3);
			assert.equal(this.rfs.options.interval.unit, "m");
		});
	});

	describe("interval hours", function() {
		before(function(done) {
			var self = this;
			var doIt = function() {
				self.rfs = rfs(done, { interval: "3h" });
				self.rfs.end();
			};

			var now = new Date().getTime();
			var sec = parseInt(now / 1000) * 1000;

			if(now - sec < 900)
				return doIt();

			setTimeout(doIt, 101);
		});

		it("3h", function() {
			assert.equal(this.rfs.options.interval.num, 3);
			assert.equal(this.rfs.options.interval.unit, "h");
		});
	});

	describe("interval days", function() {
		before(function(done) {
			var self = this;
			var doIt = function() {
				self.rfs = rfs(done, { interval: "3d" });
				self.rfs.end();
			};

			var now = new Date().getTime();
			var sec = parseInt(now / 1000) * 1000;

			if(now - sec < 900)
				return doIt();

			setTimeout(doIt, 101);
		});

		it("3d", function() {
			assert.equal(this.rfs.options.interval.num, 3);
			assert.equal(this.rfs.options.interval.unit, "d");
		});
	});
});
