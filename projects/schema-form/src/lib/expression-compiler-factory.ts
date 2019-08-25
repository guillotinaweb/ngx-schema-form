export abstract class ExpressionCompilerFactory {
    public abstract createExpressionCompiler(): ExpressionCompiler;
    public abstract createExpressionCompilerVisibilityIf(): ExpressionCompilerVisibilityIf;
}

export interface ExpressionCompiler {
    evaluate(expression: string, context: object): any;
}

export interface ExpressionCompilerVisibilityIf {
    evaluate(expression: string, context: ExpressionContextVisibilitIf): any;
}
/**
 * UseCase:<br/>
 * When evaluating the expression of a <code>visibilityIf</code> condition
 * an instance of this definition will be passed as context.<br/>
 * This will give access to the source and target <code>FormProperty</code>.
 */
export interface ExpressionContextVisibilitIf {
    /**
     * The source property which has the <code>visibilityIf</code> defined
     */
    source: FormProperty
    /**
     * The target property given with the <code>visibilityIf</code>
     * <em>path</em> property
     */
    target: FormProperty
}


import * as JEXL from 'jexl';
import { FormProperty } from './model';

export class JEXLExpressionCompilerFactory extends ExpressionCompilerFactory {
    public createExpressionCompiler(): ExpressionCompiler {
        return new JEXLExpressionCompiler();
    }

    public createExpressionCompilerVisibilityIf(): ExpressionCompilerVisibilityIf {
        return new JEXLExpressionCompilerVisibiltyIf();
    }
}

export class JEXLExpressionCompiler implements ExpressionCompiler {
    evaluate(expression: string, context: object = {}): any {
        return new JEXL.Jexl().evalSync(expression, context)
    }
}

export class JEXLExpressionCompilerVisibiltyIf implements ExpressionCompilerVisibilityIf {
    evaluate(expression: string, context: ExpressionContextVisibilitIf = { source: {} as FormProperty, target: {} as FormProperty }): any {
        return new JEXL.Jexl().evalSync(expression, context)
    }
}
