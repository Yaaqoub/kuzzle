[![Build Status](https://travis-ci.org/kuzzleio/kuzzle.svg?branch=master)](https://travis-ci.org/kuzzleio/kuzzle) 
[![codecov.io](http://codecov.io/github/kuzzleio/kuzzle/coverage.svg?branch=master)](http://codecov.io/github/kuzzleio/kuzzle?branch=master) 
[![Join the chat at https://gitter.im/kuzzleio/kuzzle](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kuzzleio/kuzzle?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![logo](http://kuzzle.io/themes/kuzzleio/images/kuzzle-logo-blue-500.png)

## Why Kuzzle ?

Kuzzle is a ready-to-use, **on-premises backend** that enables you to manage your persistent data and be notified in real-time on whatever happens to it. It also provides you with a flexible and powerful user-management system.

Kuzzle enables you to build modern web applications and complex IoT networks in no time.

* **Persisted data**: store your data and perform advanced searches on it.
* **Real-time notifications**: subscribe to fine-grained subsets of data.
* **User Management**: login, logout and security rules are no more a burden.
* **Extensible**: fit Kuzzle to your needs by leveraging the plugin system.


## Installation

### Docker install

If you are running Docker and just want to get your own Kuzzle running, you can use the provided docker-compose file.

Prerequisites:

* [Docker](https://docs.docker.com/engine/installation/) (version >1.10.0)
* [Docker Compose](https://docs.docker.com/compose/install/) (version >1.7)

From Kuzzle's build repo:

    $ sudo sysctl -w vm.max_map_count=262144
    $ wget http://kuzzle.io/docker-compose.yml
    $ docker-compose up
    
You can get detailed information about how to [start kuzzle with docker on docs.kuzzle.io](http://docs.kuzzle.io/guide/essentials/installing-kuzzle/#docker)

### Manual install

Check our [complete installation guide on docs.kuzzle.io](http://docs.kuzzle.io/guide/essentials/installing-kuzzle/#manually)

## Quick start with Kuzzle

* [Install and start Kuzzle server](http://docs.kuzzle.io/guide/essentials/installing-kuzzle/)
* [Choose a SDK](http://docs.kuzzle.io/sdk-reference/)
* Build your application without caring about your backend !

Check the [**Getting started page on docs.kuzzle.io**](http://docs.kuzzle.io/guide/getting-started/)

### NodeJS Sample

```bash
npm install kuzzle-sdk
```

```javascript
const 
    Kuzzle = require('kuzzle-sdk'),
    kuzzle = new Kuzzle('http://localhost:7512')

const filter = {
    exists: {
        field: 'message'
    }
}

// Subscribe to data changes in an app
kuzzle
    .collection('mycollection', 'myindex')
    .subscribe(filter, function(error, result) {
        // triggered each time a document is updated !
        console.log('message received from kuzzle:', result)
    })
    
// Creating a document from an other app will notify all subscribers
kuzzle
    .collection('mycollection', 'myindex')
    .createDocument(document)
```

### Usefull links

* [Full documentation](http://docs.kuzzle.io/)
* [SDK Reference](http://docs.kuzzle.io/sdk-reference/)
* [API Documentation](http://docs.kuzzle.io/api-documentation/)  
* [Data Validation Documentation](http://docs.kuzzle.io/validation-reference/) 
* [View release notes](https://github.com/kuzzleio/kuzzle/releases)

## Contributing to Kuzzle

You're welcome to contribute to Kuzzle!
Feel free to report issues, ask for features or even make pull requests ! 

Check our [contributing documentation](./CONTRIBUTING.md) to know about our coding and pull requests rules

## Join our community

* Follow us on [twitter](https://twitter.com/kuzzleio) to get latest news
* Register to our monthly [newsletter](http://eepurl.com/bxRxpr) to get highlighed news
* Visit our [blog](http://kuzzle.io/blog) to be informed about what we are doing
* Come chat with us on [gitter](https://gitter.im/kuzzleio/kuzzle)
* Ask technical questions on [stack overflow](https://stackoverflow.com/search?q=kuzzle)

## Kuzzle Enterprise

Kuzzle Enterprise is production-proof, and provides all the business-critical features your need for your business, as
the scalability, the high-availability (multi-nodes), probes for BI, diagnostic tools & professional services,

[Compare editions to learn more](http://kuzzle.io/kuzzle-enterprise)

## License

Kuzzle is published under [Apache 2 License](./LICENSE.md).
