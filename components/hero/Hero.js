import React from "react";
import { useSession } from "next-auth/react";
import Dropdown from "../dropdown/Dropdown";

const Hero = () => {
  const { data: session } = useSession();
  let username = "";
  if (session) {
    const { user } = session;
    if (user) {
      const { name } = user;
      username = name;
      console.log(name);
    }
    console.log(user);
  } else {
    console.log(session);
  }
  console.log(username);
  const date = new Date();
  const hours = date.getHours();
  let welcomeText;
  if (hours < 12) {
    welcomeText = `good morning`;
  } else if (hours >= 12 && hours <= 16) {
    welcomeText = "good afternoon";
  } else if (hours > 16) {
    welcomeText = "good evening";
  }

  return (
    <div className="border-2 ">
      <header className="flex justify-between p-2 text-xl font-semibold  border">
        {session ? (
          <h2 className={`capitalize`}>{`${welcomeText} , ${username}!`}</h2>
        ) : (
          <h2 className="">Welcome, hope you have a good time 😉</h2>
        )}
        <Dropdown/>
      </header>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat et cumque ipsum quod ipsa vitae laborum, ex illum, tenetur eligendi consectetur quibusdam unde eius. Accusantium minima est ea pariatur expedita rerum accusamus delectus quo eos cum. Necessitatibus minima corrupti excepturi iusto, adipisci, assumenda sed cum iure eius odio tempore quibusdam rerum consequatur pariatur eaque aliquam. Incidunt aliquid, iusto delectus hic nisi sunt necessitatibus suscipit debitis corrupti soluta eveniet illum neque quae optio modi mollitia quasi aperiam nulla nostrum ea est cupiditate veniam et dignissimos. Nam, provident adipisci! Repudiandae molestias voluptate reiciendis ipsum, alias placeat exercitationem omnis, consequuntur iusto error eligendi vel odit ducimus cupiditate dolorum, saepe tempora soluta non vero blanditiis ad qui aspernatur expedita? Quibusdam animi non unde corporis sed in recusandae at cumque, voluptate nihil perferendis dolorum optio deleniti sapiente iste eos dolorem eaque tenetur! Laborum, alias! Voluptatibus autem ad dicta cumque quia eius quibusdam non dolor accusantium magni velit tempore itaque, ipsam eligendi minima aperiam debitis corrupti tenetur commodi culpa rem officiis qui? Iste impedit omnis eligendi repellendus accusamus esse inventore aperiam totam repellat error quae incidunt, assumenda dolore consequatur culpa rerum eveniet maiores? Veniam eaque dicta alias ea rerum et fuga repudiandae mollitia aspernatur minima.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores quis adipisci, doloribus ex qui minus quaerat voluptatibus sit reiciendis inventore nam totam? Veniam, ipsum. Aspernatur perspiciatis ducimus eius inventore iste voluptatum architecto non iure quos odio officia id magni obcaecati optio amet quia, dolorem ex quis nobis similique repellat? Quos at, provident dolor perferendis in architecto dolore voluptatum distinctio corrupti maxime corporis consequatur, incidunt exercitationem voluptatem adipisci reprehenderit officiis pariatur molestiae ab necessitatibus veniam rerum quas. At laboriosam omnis exercitationem illo quas repudiandae eum repellendus tempore error, amet culpa cum, earum suscipit. Tempora assumenda distinctio ex et aut deserunt nemo, harum similique voluptatem reprehenderit. Dolore laudantium quam molestiae perspiciatis, temporibus porro. Eum ab voluptatem labore qui ex, adipisci in veritatis nihil deserunt recusandae. Sapiente laboriosam quis adipisci, blanditiis, cupiditate animi vitae atque accusantium rerum rem soluta aut deserunt culpa consectetur! Consequatur suscipit harum maxime ab assumenda minima neque odit accusamus, temporibus earum, reprehenderit similique! Cumque id voluptate, delectus sint qui fuga. Tempora ullam sapiente libero? Sapiente ducimus illum sed velit, saepe consectetur debitis. Aut incidunt possimus nisi inventore, hic qui a commodi, et reprehenderit sed quod? Pariatur debitis consectetur temporibus ducimus esse perspiciatis aliquam quam. Fugiat debitis maxime doloremque modi in iusto quod soluta ea, nesciunt voluptatum numquam deleniti perferendis, illo a, earum sequi. Unde molestiae autem obcaecati impedit laboriosam! Quo sapiente distinctio expedita quae aperiam consequatur soluta libero nisi nam dolores voluptate iste adipisci deserunt, impedit quam! Repudiandae, doloribus? Expedita, ratione eos! Fugit quod enim illum nisi nemo culpa earum sunt veritatis quia ratione a reprehenderit sit cum blanditiis perspiciatis repellat, accusantium quis fuga corrupti harum numquam eius unde hic. Ut eos repellat itaque natus, praesentium veniam dolor recusandae laudantium consequuntur tenetur facilis quae alias excepturi quos repellendus eligendi accusamus consequatur porro voluptates. Porro nisi numquam asperiores distinctio sapiente repellendus corrupti eveniet fugit accusamus accusantium. Ratione voluptates corrupti aliquam! Natus magni aut eligendi earum eos debitis, saepe quisquam reprehenderit blanditiis facilis repudiandae possimus laborum. Sed quas vel porro vitae iure veritatis, corrupti, placeat sunt ad tempore est laudantium nulla amet neque temporibus excepturi voluptatibus pariatur accusamus magnam earum aperiam. Obcaecati dolor illum ex, eaque officiis architecto deserunt asperiores qui ipsam odio vel dolorem blanditiis cum sit neque mollitia omnis aperiam a voluptatem doloremque ea natus repellat! Dolorem, doloremque consequuntur delectus quisquam facere, excepturi similique maiores non quam, fugit nam cum officiis quos quia sequi molestias corrupti deleniti harum?
      </section>
    </div>
  );
};

export default Hero;
