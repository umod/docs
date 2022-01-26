---
hide_table_of_contents: true
---

# OnServerInitialized

## Usage

* Called after the server startup has been completed and is ready connections
* Also called for plugins that are hotloaded while the server is already running
* Boolean parameter, false if called on plugin hotload and true if called on server initialization
* No return behavior

## Examples

```csharp
void OnServerInitialized(bool initialBoot)
{
    if (initialBoot)
    {
        Puts($"Server startup process completed at {DateTime.Now}");
    }
}
```
