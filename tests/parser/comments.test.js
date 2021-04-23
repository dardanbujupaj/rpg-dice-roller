// import { SyntaxError } from '../../src/parser/grammars/grammar.js';
// import StandardDice from '../../src/dice/StandardDice.js';
// import RollGroup from '../../src/RollGroup.js';
import Parser from '../../src/parser/Parser.js';

describe('Parsing', () => {
  describe('Comments', () => {
    describe('Roll comment', () => {
      test('can parse`1d20+5 # Attack roll`', () => {
        const notation = '1d20+5 # Attack roll';
        const parsed = Parser.parse(notation);

        expect(parsed).toBeInstanceOf(Array);
        expect(parsed).toHaveLength(3);

        /*
                const group = parsed[0];

                expect(group).toBeInstanceOf(RollGroup);

                expect(group.expressions).toBeInstanceOf(Array);
                expect(group.expressions).toHaveLength(1);
                expect(group.expressions[0]).toHaveLength(1);
                expect(group.expressions[0][0]).toEqual(dice[0]);

                expect(group.modifiers).toEqual(new Map());
                expect(group.notation).toEqual(notation);
                */
      });

      test('can parse `{1d6+1d4} # Test roll`', () => {
        const notation = '{1d6+1d4} #Test roll';

        const parsed = Parser.parse(notation);

        expect(parsed).toBeInstanceOf(Array);
        expect(parsed).toHaveLength(1);

        /*
        const dice = [
          new StandardDice(6),
          new StandardDice(4),
        ];

        const group = parsed[0];

        expect(group).toBeInstanceOf(RollGroup);

        expect(group.expressions).toBeInstanceOf(Array);
        expect(group.expressions).toHaveLength(1);
        expect(group.expressions[0]).toHaveLength(3);
        expect(group.expressions[0][0]).toEqual(dice[0]);
        expect(group.expressions[0][1]).toEqual('+');
        expect(group.expressions[0][2]).toEqual(dice[1]);

        expect(group.modifiers).toEqual(new Map());
        expect(group.notation).toEqual(notation);
        */
      });
    });

    describe('Inline comments', () => {
      test('can parse `8d6[Fire Damage]`', () => {
        const notation = '8d6[Fire Damage]';
        const parsed = Parser.parse(notation);

        expect(parsed).toBeInstanceOf(Array);
        expect(parsed).toHaveLength(1);

        /*
            const group = parsed[0];

            expect(group).toBeInstanceOf(RollGroup);

            expect(group.expressions).toBeInstanceOf(Array);
            expect(group.expressions).toHaveLength(1);
            expect(group.expressions[0]).toHaveLength(1);
            expect(group.expressions[0][0]).toEqual(new StandardDice(23, 19, []));

            expect(group.modifiers).toBeInstanceOf(Map);
            expect(group.modifiers.size).toBe(1);
            expect(group.modifiers.has('drop-l')).toBe(true);

            const mod = group.modifiers.get('drop-l');
            expect(mod).toBeInstanceOf(DropModifier);
            expect(mod.end).toEqual('l');
            expect(mod.qty).toBe(1);

            expect(group.notation).toEqual('{19d23}dl1');
            */
      });

      test('can parse emojis `1d4[❄️🥶 Damage]`', () => {
        const notation = '1d4[❄️🥶 Damage]';
        const parsed = Parser.parse(notation);

        expect(parsed).toBeInstanceOf(Array);
        expect(parsed).toHaveLength(1);
      });
    });

    describe('Mixed comments', () => {
    });
  });
});
