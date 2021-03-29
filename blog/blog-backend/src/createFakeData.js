import Post from './models/post';

export default function createFakeData() {
	const posts = [...Array(40).keys()].map((i) => ({
		title: `포스트 #${i}`,
		body:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et augue ac odio euismod imperdiet sed sed enim. Morbi et felis in lorem mattis tincidunt lacinia luctus libero. Praesent aliquet enim vel orci dictum, eu egestas eros congue. Curabitur quis imperdiet tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In varius fringilla mauris in scelerisque. Nullam vel posuere nibh, sed consequat lacus. Mauris non finibus felis. Vestibulum eget faucibus nisl, id porta arcu. Aliquam auctor sit amet dolor et tristique. Sed justo mi, elementum quis vulputate a, viverra vitae eros. Quisque eleifend maximus hendrerit. Sed pulvinar ultrices varius. Etiam maximus massa odio, id vestibulum ipsum porta sit amet. Aenean in lectus ante.',
		tags: ['가짜', '데이터'],
	}));
	Post.insertMany(posts, (err, docs) => {
		console.log(docs);
	});
}
