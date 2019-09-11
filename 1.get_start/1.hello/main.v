import (
    gl
    glfw
    time
)

fn main() {

    glfw.init()

    win_cfg := glfw.WinCfg{
          width:500,
          height:500,
          title:'hello',
    }

    window := glfw.create_window(win_cfg)

    for !window.should_close() {
        window.swap_buffers()
        glfw.poll_events()
        time.sleep_ms(100)
    }
}