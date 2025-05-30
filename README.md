I decided to just create a little website with some of my photography on it rather than pick a "favorite" website,
I honestly can't think of one anyways. I do have a website and making my own is something I would like to do 
anyways so it is good practice! I picked out a few of my favorite polaroids and cut out the background in Photoshop
so they would just be the polaroid. Later I would want to add links to the images that go the item in the store page.

I used Bootstrap components to add padding and make things centered, and to pick the size of fonts as well. I tried
to use CSS as little as possible, only where I wanted it to do something that the bootstrap couldn't do, or at least
I couldn't figure out how to do, like make the hover color over the links change and I added a transition time as
well. I was able to figure out how to do some of the things I had in my CSS file with Bootstrap and ended up deleteing
stuff from the CSS file as I went along and learned. I think I am getting the hang of where to put stuff in which part
of the elements so that is good! I did notice that Bootstrap would make some CSS things not work and visa versa. I just
had to play around with a lot of the things. I still had to use some media queries for the images on the home page, but 
I chose to make them break at the same points that Bootstrap has breaks so that it would at least be consistent with 
everything else on the different screen sizes! I still used CSS for the body, because it was just a couple things like
a custom font and a specific background color.

I decided to add some JS for the comment form, like making sure that the email address is filled out before sending the
form, but I would also like to have it so that the message part needs to be filled out as well. I also added one that
would make sure that the email address entered is in the correct format before sending the form. I also included one
to have the form actually go somewhere when it is sent. I did add an ID and an "onclick" to the button in the HTML
as well, from what I could see something like that is required to make that work so I threw that in too!

And the final JS function I added would be able to calculate shipping based off the distance from where the product
would be sent from, depending on which column the item they choose is in. So it would be two different functions 
probably, one would be more if it was a framed or not framed, the would return different values. I read about doing 
this on the website I found the code on, and it mentioned something about an API and using google maps to calculate
distance so I'm sure this is fairly advanced! 

Another feature that would be cool to add later too would maybe be to be able to click on the individual polaroid and
have another image of a back of a polaroid to show a "quick look" of the price before clicking on the link and having
it take you to the store!