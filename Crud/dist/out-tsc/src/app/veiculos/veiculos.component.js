var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { VeiculosService } from './veiculos.service';
import { Veiculo } from './veiculos';
var VeiculosComponent = /** @class */ (function () {
    function VeiculosComponent(veiculosService) {
        this.veiculosService = veiculosService;
        this.displayedColumns = ['placa', 'chassi', 'renavam', 'marca', 'modelo', 'ano', 'edit', 'delete'];
        this.dataSource = new MatTableDataSource();
        this.selectedVeiculo = new Veiculo();
        this.loading = false;
    }
    VeiculosComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    VeiculosComponent.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.veiculosService.getVeiculos()];
                    case 1:
                        data = _a.sent();
                        this.dataSource.data = data;
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    VeiculosComponent.prototype.updateVeiculo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectedVeiculo.id != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.veiculosService.updateVeiculo(this.selectedVeiculo)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.veiculosService.createVeiculo(this.selectedVeiculo)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.selectedVeiculo = new Veiculo();
                        return [4 /*yield*/, this.refresh()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VeiculosComponent.prototype.editVeiculo = function (veiculo) {
        this.selectedVeiculo = veiculo;
    };
    VeiculosComponent.prototype.clearVeiculo = function () {
        this.selectedVeiculo = new Veiculo();
    };
    VeiculosComponent.prototype.deleteVeiculo = function (veiculo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        if (confirm('Tem certeza que deseja deletar veícuo ${veiculo.placa}? Essa operação não pode ser desfeita.')) {
                            this.veiculosService.deleteVeiculo(veiculo.id);
                        }
                        return [4 /*yield*/, this.refresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VeiculosComponent = __decorate([
        Component({
            selector: 'app-veiculos',
            templateUrl: './veiculos.component.html',
            styleUrls: ['./veiculos.component.css']
        }),
        __metadata("design:paramtypes", [VeiculosService])
    ], VeiculosComponent);
    return VeiculosComponent;
}());
export { VeiculosComponent };
//# sourceMappingURL=veiculos.component.js.map