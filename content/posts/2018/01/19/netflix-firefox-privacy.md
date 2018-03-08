+++
date = "2018-01-19"
title = "Watch Netflix on Firefox with custom privacy settings (F7121-1331-P7)"
+++

Just wanted to share some information which could save you a few hours.

**TL;DR:** Set `privacy.resistFingerprinting` to `false` in `about:config`.

If you are watching Netflix on Firefox using a custom configuration based on privacy (like [privacytools.io](https://www.privacytools.io/#about_config)) you might run into an error code like `F7121-1331-P7`.
Netflix recommends reinstalling Firefox but we can do better.

I checked all of my settings and came to the conclusion that `privacy.resistFingerprinting` should be set to `false` in about config.
All other settings mentioned on [privacytools.io](https://www.privacytools.io/#about_config) seem to work without problems including:

- `media.peerconnection.*` (WebRTC)
- `privacy.firstparty.isolate`
- `privacy.trackingprotection.enabled`
- `geo.*`
- `network.*`

If you find some other settings which block this particular service feel free to leave me a note.