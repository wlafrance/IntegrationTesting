import { getCurrencies   } from "./getCurrencies";
import { resetFakeAsyncZone } from "@angular/core/testing";

describe('GetCurrencies',()=>{

    it('should return the support currencies',()=>{
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});