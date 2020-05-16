<div align="center">
  <img width="100" height="100" src="https://github.com/zikwall/blogchain/blob/master/screenshots/bc_300.png">
  <h1>Blog Chain</h1>
  <h5>A network of blogs written in various programming languages, including client and server</h5>
</div>

### Client

- [x] Next.js (WIP)

### Backend-s:

- [x] [Go (WIP)](https://github.com/zikwall/blogchain-go)
- [ ] Rust
- [ ] PHP
- [ ] Node.js

### Todo

- [x] Custom Blogchain HTTP client
- [x] Automatically HTTP error handling with use native http codes
- [x] UI component collection
- [x] Authorization\Auntification support: client side & server side based on JWT
- [ ] Support SEO
    - [x] Title
    - [ ] Description
    - [ ] Other meta tags
- [x] Active Links support by href (or asHref)
- [x] Feeds | Index | Home (WIP)
    - [x] Pagination
- [x] Post | Posts | Tags
    - [x] Support WYSIWYG editor based on Quill: todo emoji
    - [x] Create\Update\View content
    - [ ] Delete content
    - [ ] Content
    - [x] TimeAgo
    - [x] Author info
    - [x] Image
    - [x] Annotation
    - [ ] Company Heading (if company exist)
    - [ ] Company info (if exist)
    - [ ] Comments
    - [x] Tags
    - [ ] Labels
    - [ ] Actions
    - [ ] Stats: views, rating, bookmarks
- [ ] Top
    - [ ] Most Popular
    - [ ] Month | Week | Day
- [ ] Publisher related items
- [ ] News
- [ ] Authors
- [ ] Companies
- [x] Login
- [ ] Registration
- [ ] Forgot password
- [ ] Profile
    - [ ] Overview
        - [x] Information: Avatar, Location & etc.
        - [ ] Pinned items
        - [ ] Activity
    - [ ] All items
    - [ ] Stars
    - [ ] Following
    - [ ] Followers
- [ ] Settings
    - [ ] Security
    - [ ] Profile edit
- [ ] Global search

### Welcome

https://blogchain.now.sh/

### Run dev

1. Use one of backend apps, example Go: `go run .`
2. `npm run dev`
