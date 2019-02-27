"use strict";

module.exports = {
  name: "math",
  
  actions: {
    fibo: {
      params: {
        n: { type: "number", positive: true },
      },
      handler(ctx) {
        let num = Number(ctx.params.n);
        let a = 1, b = 0, temp;
        
        while (num >= 0) {
          temp = a;
          a = a + b;
          b = temp;
          num--;
        }
        
        this.logger.info(`'fibo' request received from ${ctx.nodeID}. Reply result:`, b);
        
        return b;
      }
    },
  
    add(ctx) {
      
      return Number(ctx.params.a) + Number(ctx.params.b);
    },
  
    sub(ctx) {
      return Number(ctx.params.a) - Number(ctx.params.b);
    },
  
    mult: {
      params: {
        a: "number",
        b: "number"
      },
      handler(ctx) {
        return Number(ctx.params.a) * Number(ctx.params.b);
      }
    },
  
    div: {
      params: {
        a: { type: "number", convert: true },
        b: { type: "number", notEqual: 0, convert: true }
      },
      handler(ctx) {
        let a = Number(ctx.params.a);
        let b = Number(ctx.params.b);
        if (b != 0 && !Number.isNaN(b))
          return a / b;
        else
          throw new MoleculerError("Divide by zero!", 422, null, ctx.params);
      }
    }
  }
};