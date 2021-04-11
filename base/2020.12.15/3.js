const pubsub = {};
(function (q) {
	let topics = {};
	let	subUid = -1;
	q.publish = function (topic, args) {
		if (!topics[topic]) {
			return false
		}

		 let subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;

        while (len--) {
            subscribers[len].func(topic, args);
        }
        return true
	}

	q.subscribe = function (topic, func) {
		if (!topics[topic]) {
			topics[topic] = []
		}

		const token = (++subUid).toString();
        topics[topic].push({
            token,
            func
        });
        return token;
	}

	q.unsubscribe = function (token) {
		for (let m in topics) {
			if (topics[m]) {
				for (let i = 0; i <topics[m].length; i++) {
					if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
				}
			}
		}
		return false
	}
})(pubsub)

pubsub.subscribe("example", function (topics, data) {
	console.log("reciver1", topics, data)
})

pubsub.subscribe("example", function (topics, data) {
	console.log("reciver2", topics, data)
})

pubsub.publish('example', 'hello world!');