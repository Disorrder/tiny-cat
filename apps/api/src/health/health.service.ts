import { Injectable } from "@nestjs/common";
// biome-ignore lint/style/useImportType: dependency must be imported as a value
import { HealthCheckService, HttpHealthIndicator } from "@nestjs/terminus";

@Injectable()
export class HealthService {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  async checkHttp() {
    return this.http.pingCheck("nestjs-docs", "https://docs.nestjs.com");
  }

  async checkAll() {
    return this.health.check([() => this.checkHttp()]);
  }
}
