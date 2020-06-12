import { TestBed } from '@angular/core/testing';
import { VeiculosService } from './veiculos.service';
describe('VeiculosService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(VeiculosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=veiculos.service.spec.js.map