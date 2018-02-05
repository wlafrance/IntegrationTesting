import { compute } from "./compute";
import { expand } from "rxjs/operators/expand";
import { resetFakeAsyncZone } from "@angular/core/testing";

describe('Compute',()=>{

    it('shoudl return 0 if input is a negative number',()=>{
       
        const result = compute(-1);
      
        expect(result).toBe(0);
    });

    it('should increment the number by if input is greater than one',()=>{
        const result = compute(1);
        expect(result).toBe(2);
    });

});