var listsDict = {
    "Famous People": ['the Cowardly Lion', 'Dr. Seuss', 'Ebenezer Scrooge', 'Bugs Bunny', 'James Bond', 'Amelia Earhart', 'Andy Warhol', 'Jimmy Stewart', 'Dr. Emmett Brown', 'John Hancock', 'Dennis the Menace', 'Dumbledore', 'Eleanor Roosevelt', 'Sirius Black', 'Sean Connery', 'Dracula', 'Shakespeare', 'Bruce Willis', 'Babe Ruth', 'James Earl Jones', 'Buzz Lightyear', 'Spider Man', 'Albert Einstein', 'Inigo Montoya', 'Denzel Washington', 'Jim Henson', 'Barbie', 'James Madison', 'Sherlock Holmes', 'Fozzy', 'Brad Pitt', 'Buddy Holly', 'Elizabeth Bennett', 'Scooby Doo', 'E.T.', 'Jackson Pollock', 'Indiana Jones', 'Shel Silverstein', 'Henry Ford', 'Capn Crunch', 'Dora the Explorer', 'Abraham Lincoln', 'Elvis Presley', 'Stephanie Meyer', 'Lance Armstrong', 'Leonardo Da Vinci', 'C-3P0', 'Celine Dion', 'Davy Crockett', 'Mahatma Gandhi', 'Justin Beiber', 'Anakin Skywalker', 'Eli Whitney', 'Audrey Hepburn', 'Isaac Newton', 'Robin Hood', 'Rocky', 'Frankenstein', 'Beethoven', 'Pocahontas', 'Kevin Bacon', 'John Williams', 'Louis Armstrong', 'Hannah Montana', 'David Beckham', 'Helen Keller', 'Lucille Ball', 'Sacajawea', 'Benjamin Franklin', 'Captain Kirk', 'Billy the Kid', 'Franklin D. Roosevelt', 'Mario', 'Han Solo', 'Mark Twain', 'C. S. Lewis', 'Salvador Dali', 'Captain Hook', 'Rapunzel', 'Charles Dickens', 'Luke Skywalker', 'Harry Houdini', 'Santa Claus', 'Harrison Ford', 'Batman', 'George Lucas', 'Darth Vader', 'Mufasa', 'Oprah Winfrey', 'Garfield', 'Genghis Khan', 'Gilligan', 'Michael Phelps', 'Michelangelo', 'Charles Darwin', 'Betsy Ross', 'Bill Gates', 'Walt Disney', 'Harry Potter', 'Marty McFly', 'Hamlet', 'Mother Teresa', 'Cleopatra', 'Mr. Darcy', 'Clark Kent', 'Grace Kelly', 'Thomas Edison', 'Tony Hawk', 'Neil Armstrong', 'Bill Cosby', 'George Washington', 'Cinderella', 'Willy Wonka', 'Mary Poppins', 'Peter Pan', 'Frodo', 'Neil Diamond', 'George of the Jungle', 'Mr. Rogers', 'Pablo Piccaso', 'Voldermort', 'Winnie the Pooh', 'Christopher Columbus', 'Aristotle', 'Amanda Bynes', 'Will Smith', 'Tom Hanks', 'Grace Kelly', 'Babe Ruth', 'Walt Disney', 'Carrie Fisher', 'Galileo', 'Mr. Rogers', 'Leonardo DiCaprio', 'Abraham Lincoln', 'Andy Griffith', 'Mohammad Ali', 'Oscar Wilde', 'Paul McCartney', 'Michael Phelps', 'Plato', 'Lewis and Clark', 'Johnny Depp', 'Buddy Holly', 'Leonardo Da Vinci', 'Walter Cronkite', 'Lord Byron', 'Beethoven', 'Audrey Hepburn', 'King George', 'Tiger Woods', 'Benjamin Franklin', 'Mother Teresa', 'Michael J. Fox', 'Mandy Moore', 'Bill Gates', 'Albert Einstein', 'Victor Hugo', 'Susan B. Anthony', 'Justin Beiber', 'Archimedes', 'Martin Sheen', 'the Wright Brothers', 'Davy Crockett', 'Bill Clinton', 'Socrates', 'Ulysses S. Grant', 'Alex Rodriguez', 'Bruce Willis', 'John Williams', 'the Beatles', 'Eddie Murphy', 'Shia LaBeouf', 'Neil Diamond', 'Norman Rockwell', 'Steve Jobs', 'Claude Monet', 'Theodore Roosevelt', 'Harrison Ford', 'Michelangelo', 'Shaquille ONeal', 'Thomas Paine', 'Stephanie Meyer', 'Steve Martin', 'Shakespeare', 'Samuel Morse', 'Rembrandt', 'George Lucas', 'Christopher Columbus', 'Buzz Aldrin', 'Lewis Carrol', 'Brad Pitt', 'Mark Twain', 'Barack Obama', 'Dick Van Dyke', 'Jimmy Stewart', 'David Beckham', 'Georgia OKeeffe', 'C. S. Lewis', 'Regis Philbin', 'Rosa Parks', 'Reese Witherspoon', 'Dakota Fanning', 'Cleopatra', 'J.K. Rowling', 'Andy Warhol', 'Helen Keller', 'Elton John', 'Robin Williams', 'Kevin Bacon', 'Raphael', 'Jack Black', 'Christian Bale', 'Charles Dickens', 'Danny Glover', 'Patrick Henry', 'Henry Ford', 'Charles Darwin', 'Denzel Washington', 'Queen Latifah', 'Dr. Seuss', 'Pocahontas', 'Ronald Regan', 'Sacajawea', 'Isaac Newton', 'Michael Jordan', 'James Taylor', 'Salvador Dali', 'Genghis Khan', 'Charles Dickens', 'Pelé', 'Elijah Wood', 'Neil Armstrong', 'Eleanor Roosevelt', 'Michael Jackson', 'Tony Hawk', 'Anne Frank', 'Copernicus', 'James Madison', 'Eli Whitney', 'Harry Houdini', 'Ernest Hemingway', 'Frank Lloyd Wright'],
    "This is a segment called...": ['Ikea furniture names', 'Hardcore peek-a-boo', 'Combine next two segments', 'Reasons I love my dentist', 'Definitely real British slang', 'Fake words defining complex emotions', 'Forbidden pasta names', 'Worst oreo flavors', 'Who is the ghost?', 'Who can come up with the worst hypothetical question?', 'Emoji impressions', 'Describe your breakfast with one-syllable words', 'Lame conspiracy theories ', 'Aggressive compliments ', 'An ice cream flavor you wish was real', 'Invent an accent', 'Favorite plurals', 'Twelve', 'Plans for dinner', 'Pizza crimes', 'Bird brands', 'Names for babies and indie folk bands', 'Relax', 'The thing I regret eating the most', 'Most mediocre dream you can recall', 'Freeform breathing', 'Sixth sense ASMR', 'Wistful sighs', 'Forgive yourself', 'Opposite of the next segment', 'Count to 10', 'Angry winks', 'Bad things to coat in chocolate', 'Suspicious chewing', 'Fake bone names', 'Passive aggressive names for a pet', 'Fight!', 'Favorite birds', 'Speculate about robots', 'Terrible magician names', 'Chill for a second', 'Seven new deadly sins', 'Yeah, thats probably an anime', 'Sex numbers that arent 69', 'Bad animal facts', 'Think about skeletons', 'Erotic cowboy names', 'Probably a Yankee Candle', 'OwO', 'Alien curse words', 'Music genres that probably exist', 'Invent a fruit', 'Lizard crimes', 'Forbidden McDonalds menu items', 'Kinkshame each other', 'Create an internet rule', 'Mythical beasts Id like to pet', 'Early 2000s D.A.R.E. slogans', 'Musical instrument impressions', 'Music for snails', 'The secret other zodiac sign', 'The most suspicious thing in the room', 'Alternative founding fathers', 'ASMR', 'Favorite size for a frog to be', 'Fun things to fill a swimming pool with', 'Worst vape flavors', 'Face charades', 'New letters of the alphabet', 'Very kind knock-knock jokes', 'Dolphin insults', 'Sea of Jeeves', 'The worst way to appreciate art', 'ASMR yelling', 'Who should date Waluigi?', 'New slang terms for weed', 'Vampire sound effects', 'Things you just really dont know', 'Aggressive but harmless compliments', 'Cool swears for church ', 'New names for grandpa', 'What do you know about Poland?', 'Wizard sports', 'Bad units of measurement ', 'Recent food crimes', 'Yell the next segment', 'Future candy', 'Three sentence TED talk', 'Things 90s kids wont remember ', 'What do you know about the movie avatar', 'Drink water', 'Favorite even number', 'Break a rule', 'The weather', 'Pasta-based dance moves', 'Competitive OwO', 'Mildly erotic cowboy names', 'Do the last one again but faster', 'Explain bitcoin']
};