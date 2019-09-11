import (
    gl
    glfw
    time
    math
    stbi
)

fn main() {

    glfw.init()

    win_cfg := glfw.WinCfg{
          width:500,
          height:500,
          title:'texture',
    }

    window := glfw.create_window(win_cfg)

    window.make_context_current()

    gl.init_glad()

    gl.viewport(0,0,500,500)

    shader := gl.new_shader('main')

    vertices := [
           // positions      // colors        // texture coords
           0.5,  0.5, 0.0,   1.0, 0.0, 0.0,   1.0, 1.0, // top right
           0.5, -0.5, 0.0,   0.0, 1.0, 0.0,   1.0, 0.0, // bottom right
          -0.5, -0.5, 0.0,   0.0, 0.0, 1.0,   0.0, 0.0, // bottom let
          -0.5,  0.5, 0.0,   1.0, 1.0, 0.0,   0.0, 1.0  // top let
    ]

    indices := [
        0, 1, 3, // first triangle
        1, 2, 3  // second triangle
    ]

    vbo := gl.gen_buffer()
    ebo := gl.gen_buffer()
    vao := gl.gen_vertex_array()

    gl.bind_vao(vao)

    gl.bind_buffer(C.GL_ARRAY_BUFFER,vbo)
    gl.buffer_data_f32(C.GL_ARRAY_BUFFER,vertices,C.GL_STATIC_DRAW)

    gl.bind_buffer(C.GL_ELEMENT_ARRAY_BUFFER,ebo)
    gl.buffer_data_int(C.GL_ELEMENT_ARRAY_BUFFER,indices,C.GL_STATIC_DRAW)

    // position attribute
    gl.vertex_attrib_pointer(0,3,C.GL_FLOAT,false,8,0)
    gl.enable_vertex_attrib_array(0)
    // color attribute
    gl.vertex_attrib_pointer(1,3,C.GL_FLOAT,false,8,3)
    gl.enable_vertex_attrib_array(1)
    // texture coord attribute
    gl.vertex_attrib_pointer(2,2,C.GL_FLOAT,false,8,6)
    gl.enable_vertex_attrib_array(2)

    texture := gl.gen_texture()
    gl.bind_2d_texture(texture)
    // set the texture wrapping parameters
    gl.tex_param(C.GL_TEXTURE_WRAP_S,C.GL_REPEAT)
    gl.tex_param(C.GL_TEXTURE_WRAP_T,C.GL_REPEAT)
    // set texture filtering parameters
    gl.tex_param(C.GL_TEXTURE_MIN_FILTER,C.GL_LINEAR)
    gl.tex_param(C.GL_TEXTURE_MAG_FILTER,C.GL_LINEAR)

    image := stbi.load('container.jpg')
    image.tex_image_2d()
    gl.generate_mipmap(C.GL_TEXTURE_2D)
    image.free()

    gl.bind_buffer(C.GL_ARRAY_BUFFER,u32(0))

    gl.bind_vao(u32(0))

    for !window.should_close() {

        gl.clear_color(255, 255, 255,1)
        gl.clear()

        // bind Texture
        gl.bind_2d_texture(texture)

        // render container
        shader.use()
        gl.bind_vao(vao)
        gl.draw_elements(C.GL_TRIANGLES,6,C.GL_UNSIGNED_INT,0)

        window.swap_buffers()
        glfw.poll_events()

        time.sleep_ms(100)
    }
}