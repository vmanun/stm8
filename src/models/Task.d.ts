export interface SerializedTask {
  id: string;
  title: string;
  link: string;
}

export class Task {
  public id: string;
  public title: string;
  public link: URL;

  private sanitizeId(id: string) {
    if (Task.isValidId(id)) return id;
    else
      throw new Error(
        `Invalid ID '${id}'. Correct task ID sintax consist of one or two hashes (#) followed by 9 numbers`
      );
  }

  public static isValidId(id: string) {
    return /#{1,2}[0-9]{9,9}$/.test(id);
  }

  public constructor(data: SerializedTask) {
    this.id = this.sanitizeId(data.id);
    this.title = data.title;
    this.link = new URL(data.link);
  }
}
