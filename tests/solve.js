'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});
	QUnit.test('solve работает с большой вложенностью ', function (assert) {
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
		assert.strictEqual(solve('x + 2 * 5 * (x + x * 5 * (x - 2) * (x + (3 + x) * (5 + x)))', 3), 7683);
	});
	QUnit.test('solve работает без параметра x в выражении', function (assert) {
		assert.strictEqual(solve('5 + 384 * 10', 3), 3845);
		assert.strictEqual(solve('5 + 384 * 10', 5), 3845);
	});
	QUnit.test('частный случай', function (assert) {
		assert.strictEqual(solve('', 3), "invalid expression");
	});
});
