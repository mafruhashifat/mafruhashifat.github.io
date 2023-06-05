---
title: Expanding Our Website for Technical Writing
author: [Your Name]
date: 2023-06-05 14:10:00 +0800
categories: [Technical Writing, Tutorial]
tags: [website, writing, jekyll, blogging]
---

In our continuous effort to provide comprehensive resources for technical writing, we're introducing some new features and guidelines for writing on our website. Whether you're experienced with Jekyll or new to it, this guide will help you craft the perfect technical post.

## Naming and Path

Start by creating a new file with the format `YYYY-MM-DD-TITLE.EXTENSION`. This file should be placed in the `_posts` directory of the root. The `EXTENSION` must be either `md` or `markdown`. To simplify file creation, consider using the [`Jekyll-Compose`](https://github.com/jekyll/jekyll-compose) plugin.

## Front Matter

The top of your post should contain the following [Front Matter](https://jekyllrb.com/docs/front-matter/):

```yaml
---
title: TITLE
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [TOP_CATEGORY, SUB_CATEGORY]
tags: [TAG]     # TAG names should always be lowercase
---
```

Note that the `layout` of the posts has been set to `post` by default, so there's no need to add the `layout` variable in the Front Matter block.

## Categories and Tags

The `categories` of each post can contain up to two elements, while `tags` can have anywhere from zero to infinite elements. For example:

```yaml
---
categories: [Technical Writing, Guide]
tags: [writing, markdown, jekyll]
---
```

## Author Information

While the author information is usually pulled from the `social.name` and first entry of `social.links` in the configuration file, you can also override this by adding author information in `_data/authors.yml` and using `author` or `authors` in the Front Matter:

```yaml
<author_id>:
  name: <full name>
  twitter: <twitter_of_author>
  url: <homepage_of_author>
```

Then in your post's Front Matter:

```yaml
---
author: <author_id>                     # for single entry
# or
authors: [<author1_id>, <author2_id>]   # for multiple entries
---
```

This approach enables the meta tag `twitter:creator`, enriching the [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#card-and-content-attribution) for SEO.

Continue to include the rest of your post content here. Remember to use images, code blocks, videos, and prompts effectively to engage readers and provide a rich learning experience.
