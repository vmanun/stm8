export interface ISerializedTask {
  id: string;
  title: string;
  link: string | URL;
}

export interface ITaskBatch<TRawTask extends ISerializedTask> {
  title: string;
  tasks: TRawTask[];
}

export class Task implements ISerializedTask {
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

  public constructor(data: ISerializedTask) {
    this.id = this.sanitizeId(data.id);
    this.title = data.title;
    this.link = typeof data.link === "string" ? new URL(data.link) : data.link;
  }
}
