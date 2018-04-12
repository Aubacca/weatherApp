import { WindDirectionPipe } from "./wind-direction.pipe";

fdescribe("WindDirectionPipe", () => {
  it("create an instance", () => {
    const pipe = new WindDirectionPipe();
    expect(pipe).toBeTruthy();
  });
});
