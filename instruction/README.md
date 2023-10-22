## Table Of Contents

- [Getting started](#getting-started)
  - [Installation](#installation)
- [Projects](#projects)
  - [Adding a New Project](#adding-a-new-project)
  - [Updating an Existing Project](#updating-an-existing-project)
- [Team Members](#team-members)
  - [Adding a New Team Member](#adding-a-new-team-member)
  - [Managing Your Member Profile](#managing-your-member-profile)
- [License](#license)

## Getting started

Want to learn more about Jekyll? Check out [this tutorial](https://www.taniarascia.com/make-a-static-website-with-jekyll/).
Why Jekyll? Read [Andrej Karpathy's blog post](https://karpathy.github.io/2014/07/01/switching-to-jekyll/)!

For a hands-on walkthrough of al-folio installation, check out [this cool video tutorial](https://www.youtube.com/watch?v=g6AJ9qPPoyc) by one of the community members! 🎬 🍿

### Installation

Assuming you have [Ruby](https://www.ruby-lang.org/en/downloads/) and [Bundler](https://bundler.io/) installed on your system (_hint: for ease of managing ruby gems, consider using [rbenv](https://github.com/rbenv/rbenv)_). First fork the theme from github.com:alshedivat/al-folio to github.com:<your-username>/<your-repo-name> and do the following:

```bash
$ git clone git@github.com:<your-username>/<your-repo-name>.git
$ cd <your-repo-name>
$ bundle install
$ bundle exec jekyll serve
```

Now, feel free to customize the theme however you like (don't forget to change the name!).
After you are done, **commit** your final changes.

## Projects

The `projects` collection allows you to showcase your various works in a structured manner. Follow the step-by-step guide below to manage and display your projects seamlessly.

### Adding a New Project

1. **Directory Navigation**:

   - Navigate to the `_projects` directory located in the root of lab site.

2. **File Creation**:

   - Initiate a new markdown (`.md`) file. Choose a descriptive name for it, for instance, `my-project.md`.

3. **Front Matter**:

   - At the start of the file, input the essential front matter:
     ```markdown
     ---
     title: 'My Project'
     description: 'A concise description of the project.'
     image: '/path/to/image.jpg'
     link: 'http://link-to-project-website.com'
     ---
     ```

4. **Content**:
   - Underneath the front matter, delve into a comprehensive description or any content related to the project.
   - Remember to save any changes.

### Updating an Existing Project

To modify any project:

1. **Locate the Project**:

   - Head to the `_projects` directory.
   - Locate and open the markdown (`.md`) file representing the project you wish to amend.

2. **Edit**:
   - Implement the desired changes within the front matter or the main content.
   - Save any modifications.

### Presentation and Layout

- Projects found within the `_projects` directory will be automatically displayed on the designated "projects" page in a responsive grid.
- Ensure everything is properly set up within the `_config.yml` file. By default, this theme should handle this for you.

## Team Members

The structure of the site facilitates showcasing team members, detailing their roles, contact information, and more. Below is a guide to managing the team members section:

### Adding a New Team Member

1. **Directory Navigation**:

   - Head to the `_members` directory located in the root of lab site.

2. **File Creation**:

   - Begin a new markdown (`.md`) file. It's beneficial to name it after the member, for instance, `name.md`.

3. **Front Matter**:

   - At the start of the file, introduce the essential front matter. Here's a basic template:

     ```markdown
     ---
     layout: about
     inline: false
     group: [Member's Role/Group, e.g., 'Visiting Student']
     group_rank: [Ordering number, e.g., 3]
     team_frontpage: true

     title: [Title, e.g., 'Visiting Student']
     description:
     lastname: [Last name, e.g., 'Lee']

     teaser: [Short description about the member]

     profile:
       name: [Full name, e.g., 'John Lee']
       align: right
       image: [Path to image, e.g., 'john.jpg']
       twitter: [Twitter handle]
       github: [GitHub username]
       email: [Email address]
       website: [Website URL, e.g., 'https://johnlee.com']
       orcid: [ORCID iD]
       address: >
         [Address lines]
     ---
     ```

### Managing Your Member Profile

For an individual wishing to update their own profile:

1. **Locate Your File**:

   - In the `_members` directory, locate and open the `.md` file with your name.

2. **Modifications**:
   - Implement desired changes within the front matter to edit profile details or add/edit content below the front matter for a more detailed description.
   - Store any modifications.

### Presentation and Display

- Team members from the `_members` directory will be organized and displayed on the "team" page as structured cards.
- The appearance and layout are influenced by the `_pages/team.md` file, which categorizes members by their `group` and presents them with a profile image, name, role, teaser, and contact icons.
- Available titles for categorizing members include: `Faculty`, `Visiting Student`, `PhD Student`, and `Master Student`.

---

## License

The theme is available as open source under the terms of the [MIT License](https://github.com/alshedivat/al-folio/blob/master/LICENSE).

Originally, **al-folio** was based on the [\*folio theme](https://github.com/bogoli/-folio) (published by [Lia Bogoev](https://liabogoev.com) and under the MIT license).
Since then, it got a full re-write of the styles and many additional cool features.
