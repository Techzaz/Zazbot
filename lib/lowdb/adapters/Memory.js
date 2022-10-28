//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 TechZazBot Inc. TechZaz Bot
//Thank you to TechZaz and Myself
//════════════════════════════//
class Memory {
    constructor() {
        this.data = null;
    }
    read() {
        return Promise.resolve(this.data);
    }
    write(obj) {
        this.data = obj;
        return Promise.resolve();
    }
}
module.exports = { Memory };
