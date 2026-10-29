import { expect, test } from 'vitest';
import { value } from './value';
test('uses the library value', () => expect(value).toBe(1));
