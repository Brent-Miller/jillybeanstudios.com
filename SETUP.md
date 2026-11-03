# Putting jillybeanstudios.com online

Five parts, in this order. Parts 1 and 2 take about 10 minutes. Part 3 is
waiting, usually under an hour, occasionally up to a day.

1. Create the GitHub repo and give Claude access to it
2. Turn on GitHub Pages
3. Add DNS records at Namecheap
4. Turn on HTTPS and check it worked
5. Set up support@ email forwarding (do this today, it's on your Play listing)

---

## 1. Create the repo and give Claude access

**Create it**

1. Go to https://github.com/new
2. Owner: **brent-miller**. Repository name: **jillybeanstudios.com**
3. Choose **Public**. Free GitHub Pages only works on public repos, and the site is public anyway.
4. Leave everything else unticked (no README, no .gitignore, no license). An empty repo is easiest to push to.
5. Click **Create repository**.

**Give Claude access to it**

Claude reaches GitHub through the "Claude" GitHub App. If you installed it for
*selected repositories only*, the new repo isn't included yet:

1. On GitHub, click your profile picture → **Settings** → **Applications**
   (left sidebar) → **Installed GitHub Apps** tab → **Configure** next to Claude.
2. Under **Repository access**, either choose **All repositories**, or keep
   **Only select repositories** and add **brent-miller/jillybeanstudios.com**.
3. Click **Save**.

If Claude isn't listed there at all, connect GitHub from
https://claude.ai/connect-github, which also offers to install the app.

Then tell Claude in this session that the repo exists, and it will push the site.

---

## 2. Turn on GitHub Pages

After the site has been pushed:

1. Open the repo on GitHub → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, Source: **Deploy from a branch**.
   Branch: **main**, folder: **/ (root)**. Click **Save**.
3. Under **Custom domain**, type `jillybeanstudios.com` and click **Save**.
   (The site already contains a `CNAME` file saying this, but typing it here
   makes GitHub start its DNS check.) It will say the DNS check failed or is in
   progress. That's expected until part 3 is done.

**Recommended: verify the domain.** This stops anyone else from pointing a
GitHub site at your domain. On GitHub: profile picture → **Settings** →
**Pages** (this is your *account* settings, not the repo's) → **Add a domain**
→ type `jillybeanstudios.com`. It shows you a TXT record. Add it at
Namecheap with the other records in part 3, then come back and click
**Verify**.

---

## 3. DNS records at Namecheap

1. Log in at https://www.namecheap.com → **Domain List** → **Manage** next to
   jillybeanstudios.com.
2. On the **Domain** tab, find **Nameservers**. It should say
   **Namecheap BasicDNS**. If it says something else, change it to Namecheap
   BasicDNS and click the green tick. (If it shows Custom DNS with names you
   recognize, like Cloudflare, stop and ask first.)
3. Open the **Advanced DNS** tab.
4. Under **Host Records**, delete what Namecheap puts there by default. It's
   usually a **CNAME Record** for `www` pointing to `parkingpage.namecheap.com`
   and a **URL Redirect Record** for `@`. Use the bin icon on each row.
   Don't touch anything under **Mail Settings** here.
5. Click **Add New Record** for each row below. **Host** is what Namecheap
   calls the name. `@` means the bare domain. Leave TTL as **Automatic**.
   Click the green tick to save each row.

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| AAAA Record | `@` | `2606:50c0:8000::153` |
| AAAA Record | `@` | `2606:50c0:8001::153` |
| AAAA Record | `@` | `2606:50c0:8002::153` |
| AAAA Record | `@` | `2606:50c0:8003::153` |
| CNAME Record | `www` | `brent-miller.github.io.` |
| TXT Record | *(as GitHub shows it, starts with `_github-pages-challenge-`)* | *(the code GitHub shows)* |

The four A records and four AAAA records are GitHub Pages' servers (AAAA is
the newer IPv6 kind of address). The `www` record makes www.jillybeanstudios.com
work too; GitHub sends those visitors to the plain address. The TXT row is
only needed if you did the optional domain verification in part 2. For its
Host, enter only the part before `.jillybeanstudios.com`, because Namecheap adds
the domain itself.

Double-check for typos. A wrong digit is the most common reason this doesn't work.

---

## 4. Turn on HTTPS and check it worked

**Is DNS updated yet?** Open https://dnschecker.org, type `jillybeanstudios.com`,
choose **A**, and click Search. When most locations show the four `185.199.…`
addresses, it has spread. Repeat with type **CNAME** and `www.jillybeanstudios.com`,
which should show `brent-miller.github.io`.

**Does GitHub agree?** Repo → **Settings** → **Pages**. Under Custom domain it
should say **DNS check successful**. If it still shows an error after DNS
looks right, click **Remove**, then type the domain again and click **Save** to make it re-check.

**Turn on HTTPS.** On the same page, tick **Enforce HTTPS**. If the box is
greyed out, GitHub is still getting the security certificate. That can take
up to an hour after the DNS check passes, so come back later.

**Final check.** In a private/incognito window, try each of these. All should
end up at `https://jillybeanstudios.com/` with the padlock showing:

- `jillybeanstudios.com`
- `http://jillybeanstudios.com`
- `www.jillybeanstudios.com`
- `jillybeanstudios.com/loaded-dice/privacy` should end up at the game's privacy policy
- `jillybeanstudios.com/anything-else` should show the "Snake eyes" not-found page

---

## 5. Email forwarding for support@jillybeanstudios.com

Right now, mail to support@ probably goes nowhere. Namecheap forwards
it to your existing inbox for free:

1. Namecheap → **Domain List** → **Manage** → **Advanced DNS** tab.
2. Under **Mail Settings**, choose **Email Forwarding** and save (the tick).
   Namecheap adds the mail records itself.
3. Go to the **Domain** tab → **Redirect Email** → **Add Forwarder**.
   Alias: `support`. Forward to: your Gmail address. Save.
4. Test it: from a *different* account than the one you're forwarding to,
   send a message to support@jillybeanstudios.com. (Gmail sometimes hides a
   message you sent to yourself.)

Forwarding only handles receiving. Replies will come from your Gmail address.
If you later want to send mail *as* support@, that needs a mail service such
as Zoho Mail (has a free tier) or Google Workspace. That's a separate job.
