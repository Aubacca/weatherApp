import { WithObservablesModule } from './with-observables.module';

describe('WithObservablesModule', () => {
  let withObservablesModule: WithObservablesModule;

  beforeEach(() => {
    withObservablesModule = new WithObservablesModule();
  });

  it('should create an instance', () => {
    expect(withObservablesModule).toBeTruthy();
  });
});
