https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/


change this in node_modules 
1=> whatwg-url>dist>encoding.js
        var util= require('util');
        var utf8Encoder = new util.TextEncoder('utf-8');
        const utf8Decoder = new util.TextDecoder("utf-8", { ignoreBOM: true });
paste these line and remove utf8Encoder and utf8Encoder
