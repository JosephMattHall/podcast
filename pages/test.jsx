import Player from "@/components/Player";

export default function Test() {
  const track = {
    title: "Season 3 | Episode 4",
    subtitle: "The barnyard massacre",
    art: "/logo.png",
    src: "/test.mp3",
  };
  return (
    <>
      <Player track={track} />
    </>
  );
}
