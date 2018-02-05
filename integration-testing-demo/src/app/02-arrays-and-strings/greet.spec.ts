import {  greet } from "./greet";
import { expand } from "rxjs/operators/expand";
import { resetFakeAsyncZone } from "@angular/core/testing";

describe('Compute',()=>{

    it('should return input appended to Welcome',()=>{
        const nameInput = 'Warren LaFrance';
        const result = greet(nameInput);
      
        expect(result).toContain(nameInput);
    });


});