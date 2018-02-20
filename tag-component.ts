class Tag {
    constructor(private name: string) {}
    getName(): string {
        return this.name;
    }
}

class TagComponent {
    private tags: Array<Tag> = [];

    addTag(tag: Tag): void {
        let t: Tag = this.tags.find(function (value: Tag) {
            return value.getName() === tag.getName();
        });
        console.log("Found: "+ t.getName());
    }

    initTags(): void {
        this.tags.push(new Tag("tag1"));
        this.tags.push(new Tag("tag2"));
        this.tags.push(new Tag("tag3"));
    }
}

let tc: TagComponent = new TagComponent();
tc.initTags();
tc.addTag(new Tag("tag1"));