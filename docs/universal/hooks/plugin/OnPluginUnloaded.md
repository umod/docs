---
hide_table_of_contents: true
---

# OnPluginUnloaded

## Usage

* Called after any plugin has been unloaded (not to be confused with Unload)
* No return handling

## Examples

```csharp
void OnPluginUnloaded(Plugin plugin)
{
    Puts($"Plugin '{plugin.Name}' has been unloaded");
}
```
