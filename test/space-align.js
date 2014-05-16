/* global describe, it */
'use strict';

var expect     = require('chai').expect;
var spaceAlign = require('../lib/space-align');

describe('spaceAlign', function() {
	it('should work with expected, regular matrices', function() {
		expect(spaceAlign([
			['mmzVOvVYCcGaCW', 'fJfeKlyiUTwdlXqnXvJ', 'ICzVrD', 'uaUGZwvHghbtqaXCqAqS'],
			['yOwPyBVGNfBlRezMzIF', 'pbpuZTSKYrnWBIy', 'ghOhMvnnjpydAjWtY', 'VEV'],
			['usi', 'alZz', 'URVaQMaNsDTyKJo', 'EgTUWG'],
			['aTmhFgdJCsjkVXAtEDyX', 'ABDPDO', 'AUSG', 'lHMLn']
		]))
		.to.deep.equal([
			'mmzVOvVYCcGaCW          fJfeKlyiUTwdlXqnXvJ    ICzVrD               uaUGZwvHghbtqaXCqAqS',
			'yOwPyBVGNfBlRezMzIF     pbpuZTSKYrnWBIy        ghOhMvnnjpydAjWtY    VEV',
			'usi                     alZz                   URVaQMaNsDTyKJo      EgTUWG',
			'aTmhFgdJCsjkVXAtEDyX    ABDPDO                 AUSG                 lHMLn'
		]);
	});

	it('should work with irregular matrices', function() {
		expect(spaceAlign([
			['fJfeKlyiUTwdlXqnXvJ', 'ICzVrD', 'uaUGZwvHghbtqaXCqAqS'],
			['yOwPyBVGNfBlRezMzIF', 'pbpuZTSKYrnWBIy', 'ghOhMvnnjpydAjWtY', 'VEV'],
			['usi', 'alZz', 'URVaQMaNsDTyKJo', 'EgTUWG'],
			['aTmhFgdJCsjkVXAtEDyX', 'AUSG', 'lHMLn']
		]))
		.to.deep.equal([
			'fJfeKlyiUTwdlXqnXvJ     ICzVrD             uaUGZwvHghbtqaXCqAqS',
			'yOwPyBVGNfBlRezMzIF     pbpuZTSKYrnWBIy    ghOhMvnnjpydAjWtY       VEV',
			'usi                     alZz               URVaQMaNsDTyKJo         EgTUWG',
			'aTmhFgdJCsjkVXAtEDyX    AUSG               lHMLn'
		]);
	});

	it('should deal with empty columns', function() {
		expect(spaceAlign([
			['mmzVOvVYCcGaCW', '', 'ICzVrD', 'uaUGZwvHghbtqaXCqAqS'],
			['', 'pbpuZTSKYrnWBIy', 'ghOhMvnnjpydAjWtY', 'VEV'],
			['usi', 'alZz', 'URVaQMaNsDTyKJo', ''],
			['aTmhFgdJCsjkVXAtEDyX', 'ABDPDO', 'AUSG', 'lHMLn']
		]))
		.to.deep.equal([
			'mmzVOvVYCcGaCW                             ICzVrD               uaUGZwvHghbtqaXCqAqS',
			'                        pbpuZTSKYrnWBIy    ghOhMvnnjpydAjWtY    VEV',
			'usi                     alZz               URVaQMaNsDTyKJo      ',
			'aTmhFgdJCsjkVXAtEDyX    ABDPDO             AUSG                 lHMLn'
		]);
	});

	it('should work with matrices with numbers', function() {
		expect(spaceAlign([
			['mmzVOvVYCcGaCW', 2, 'ICzVrD', 'uaUGZwvHghbtqaXCqAqS'],
			['yOwPyBVGNfBlRezMzIF', 'pbpuZTSKYrnWBIy', 'ghOhMvnnjpydAjWtY', 'VEV'],
			['usi', 'alZz', 'URVaQMaNsDTyKJo', 15123],
			['aTmhFgdJCsjkVXAtEDyX', 35, 'AUSG', 'lHMLn']
		]))
		.to.deep.equal([
			'mmzVOvVYCcGaCW          2                  ICzVrD               uaUGZwvHghbtqaXCqAqS',
			'yOwPyBVGNfBlRezMzIF     pbpuZTSKYrnWBIy    ghOhMvnnjpydAjWtY    VEV',
			'usi                     alZz               URVaQMaNsDTyKJo      15123',
			'aTmhFgdJCsjkVXAtEDyX    35                 AUSG                 lHMLn'
		]);
	});

	it('should work with custom spacing option', function() {
		expect(spaceAlign([
			['mmzVOvVYCcGaCW', 'fJfeKlyiUTwdlXqnXvJ', 'ICzVrD', 'uaUGZwvHghbtqaXCqAqS'],
			['yOwPyBVGNfBlRezMzIF', 'pbpuZTSKYrnWBIy', 'ghOhMvnnjpydAjWtY', 'VEV'],
			['usi', 'alZz', 'URVaQMaNsDTyKJo', 'EgTUWG'],
			['aTmhFgdJCsjkVXAtEDyX', 'ABDPDO', 'AUSG', 'lHMLn']
		], { spacing: 8 }))
		.to.deep.equal([
			'mmzVOvVYCcGaCW              fJfeKlyiUTwdlXqnXvJ        ICzVrD                   uaUGZwvHghbtqaXCqAqS',
			'yOwPyBVGNfBlRezMzIF         pbpuZTSKYrnWBIy            ghOhMvnnjpydAjWtY        VEV',
			'usi                         alZz                       URVaQMaNsDTyKJo          EgTUWG',
			'aTmhFgdJCsjkVXAtEDyX        ABDPDO                     AUSG                     lHMLn'
		]);
	});
});