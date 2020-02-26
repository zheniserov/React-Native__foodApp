import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer sEGzAuWruobXRcpZwh-yMxwD6QYQjON30kH5VpQYocJhu3vKYGuzKbrYRtcFlzhUUH-35gPluIOJNBRr5Quvfo-qYlzJjaqtTBeS8-hzl6RmayQh9-T-hMnu06lUXnYx'
    }
});

