import Heading from './Heading';
import Section from './Section';

export default function Page() {
  return (
    <div className="border border-gray-100 bg-gray-50 p-2">
      <p className="mb-4">this is useContext page</p>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <p>Example 1</p>
          <Section>
            <Heading>Title</Heading>
            <Section>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
              <Section>
                <Heading>Sub-heading</Heading>
                <Heading>Sub-heading</Heading>
                <Heading>Sub-heading</Heading>
                <Section>
                  <Heading>Sub-sub-heading</Heading>
                  <Heading>Sub-sub-heading</Heading>
                  <Heading>Sub-sub-heading</Heading>
                </Section>
              </Section>
            </Section>
          </Section>
        </div>
        <div className="flex flex-col space-y-2">
          <p>Example 2</p>
          <Section>
            <Heading>My Profile</Heading>
            <Post
              title="Hello Traveler"
              body="Read about my adventures level"
            />
            <AllPosts />
          </Section>
        </div>
      </div>
    </div>
  );
}
function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}
function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </Section>
  );
}
function Post({ title, body }: { title: string; body: string }) {
  return (
    <Section isFancy>
      <Heading>{title}</Heading>
      <p className="mt-2">{body}</p>
    </Section>
  );
}
