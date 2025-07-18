import { expect, describe, test } from 'vitest';
import playground from './playground';

describe('test', () => {
	test('test', () => {
		expect(playground()).toEqual(true);
	});
});
