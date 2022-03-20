export const challengeQuery = `
    query($request: ChallengeRequest!) {
     challenge(request: $request) { text }
    }
`