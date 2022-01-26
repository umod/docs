---
hide_table_of_contents: true
---

# OnPluginLoaded

## Usage

* Called after any plugin has been loaded (not to be confused with Loaded)
* No return behavior

## Examples

```csharp
void OnPluginLoaded(Plugin plugin)
{
    Puts($"Plugin '{plugin.Name}' has been loaded");
}
```
