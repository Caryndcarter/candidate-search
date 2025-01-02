// TODO: Create an interface for the Candidate objects returned by the API -- the avatar_url is the image, and the login is the username


export default interface Candidate {
    readonly Name: string | null;
    readonly Email: string | null;
    readonly Company: string | null;
    readonly Bio: string | null;
    readonly Login: string | null;
    readonly Image: string | null;
    readonly Location: string | null;
  }
  