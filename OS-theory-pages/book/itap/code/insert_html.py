# Read the Markdown file
with open('/home/oem/OS-theory-pages/src/context-switching.md', 'r') as md_file:
    markdown_content = md_file.read()

with open('/home/oem/OS-theory-pages/src/example.html', 'r') as html_file:
    html_content = html_file.read()


# Find the start and end positions of the HTML content
start_index = markdown_content.find('<!-- HTML_CONTENT -->')
end_index = markdown_content.find('<!-- END -->')

print(start_index, end_index)

# If the markers are found, remove the content between them
if start_index != -1 and end_index != -1:
    updated_md_content = markdown_content[:start_index] + '<!-- HTML_CONTENT -->\n' + html_content + '\n<!-- END -->' + markdown_content[end_index+len('<!-- END -->'):]

    # Write the updated Markdown content back to the file
    with open('/home/oem/OS-theory-pages/src/context-switching.md', 'w') as updated_md_file:
        updated_md_file.write(updated_md_content)
