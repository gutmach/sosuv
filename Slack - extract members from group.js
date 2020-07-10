/*
Alternative member data extraction code for method described
at http://anara.fr/slack-scraping-session/
Enter this in Console when viewing Slack members list - may need to scroll to
bottom of members list before running or you'll only get partial data
output is JSON - enter at www.json-csv.com to convert to .csv then you
can enrich using things like PhantomBuster LI email API but LI limits to 50 calls/day
https://phantombuster.com/api-store/9058/email-to-linked-profile-url-finder
or FullContact, etc.
Greg Hawkes recommends using an autoscroll extension & zooming out in Dataminer instead
*/

mapped_members = [];
raw_members = TS.members.getActiveMembersWithSelfAndSlackbot();

for (i=0; i<raw_members.length; i++) {
  mapped_members.push({
    'userName': raw_members[i].name,
    'displayName': raw_members[i].profile.display_name,
    'firstName': raw_members[i].profile.first_name,
    'lastName': raw_members[i].profile.last_name,
    'phoneNumber': raw_members[i].profile.phone,
    'emailAddress': raw_members[i].profile.email,
    'title': raw_members[i].profile.title,
    'timezoneLabel': raw_members[i].tz_label,
    'profileImage': raw_members[i].profile.image_original
  })
}

console.log(JSON.stringify(mapped_members));