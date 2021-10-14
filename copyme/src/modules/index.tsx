import Modules, { NavBar } from "./appRouting";
import { MyModule } from "./module_repo";

/**
 * Reference modules here 
 */
export default ({ args }: any) => {
  return (
    <>
      <NavBar />
      <Modules>
        {/* <SomeModule/> */}
        {/* <AnotherModule/> */}
        <MyModule/>
      </Modules>
    </>
  );
};
