/**
 * Your task is to implement a newsletter system using observer pattern.
 * Requirements:
 * Implement three classes:
 *  1. Subscriber class, with three properties: name, emailAddress and age.
 *  2. Message class, with two properties: content and optional minimumAge
 *  3. NewsletterSystem class, it should handle the newsletter system using observer pattern.
 *      It should be initialized with one parameter: the sendEmail function
 *      The sendEmail function accepts two arguments, emailAddress and messageContent, and never fails.
 *      NewsletterSystem class should implement three methods:
 *          1.sendNewsletter: this should receive an instance of the Message class as its only argument and
 *          should call sendEmail for every subscriber, where notifications should be based on age.
 *          2.subscribe: this should receive an instance of the Subscriber class as its only argument. Its
 *          effect should be to notify that subscriber about messages in the future.
 *          3.unsubscribe: this should receive an instance of the Subscriber class. Its effect should be to
 *          allow that subscriber to opt out of receiving future messages.
 * Additional requirements:
 * - Only subscribers whose age is greater than or equal to 13 should be able to subscribe to the
 * newsletter system
 * - If a subscriber has already subscribed, and tries to do so again, nothing should happen(no
 * deep comparison is needed; subscribers should only be compared by reference).
 * - When a Message has a minimumAge specified, only subscribers whose age matches at least that
 * value should be notified.
 * - When using sendEmail, every message should be personalized in the following format: Hello
 * "Subscriber.name" "Message.content".
 */

const { Subscriber, Message, NewsletterSystem } = require("./module");

function sendEmail(emailAddress, messageContent) {
  /*
    implement your code here
  */
}

const john = new Subscriber("John", "john@example.com", 21);
const luke = new Subscriber("Luke", "luke@example.com", 16);
const leia = new Subscriber("Leia", "leia@example.com", 16);
const eric = new Subscriber("Eric", "eric@example.com", 12);
const invitation = new Message("Come and join our conference");
const loanAd = new Message("We have the best loans", 21);
const system = new NewsletterSystem(sendEmail);
system.subscribe(john);
system.sendNewsletter(invitation);
//John received email with content "Hello John Come and join our conference"
system.subscribe(luke);
system.subscribe(leia);
system.sendNewsletter(invitation);
//John, Luke and Leia received personalized emails
system.subscribe(eric);
system.sendNewsletter(invitation);
//John, Luke and Leia received personalized emails, Eric is too young for newsletters
system.sendNewsletter(loanAd);
//Only John received the email, he is the only subscriber 21+ years old
system.unsubscribe(leia);
system.sendNewsletter(invitation);
//John and Luke received personalized emails
