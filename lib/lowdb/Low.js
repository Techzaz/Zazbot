//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 TechZazBot Inc. TechZaz Bot
//Thank you to TechZaz and Myself
//════════════════════════════//
const { MissingAdapterError } = require('./MissingAdapterError.js');
class Low {
    constructor(adapter) {
        this.data = null;
        if (adapter) {
            this.adapter = adapter;
        }
        else {
            throw new MissingAdapterError();
        }
    }
    async read() {
        this.data = await this.adapter.read();
    }
    async write() {
        if (this.data) {
            await this.adapter.write(this.data);
        }
    }
}
module.exports = { Low };
