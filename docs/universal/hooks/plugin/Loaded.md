---
hide_table_of_contents: true
---

# Loaded

## Usage

* Called when a plugin has finished loading
* Other plugins may or may not be present, dependant on load order
* No return behavior

## Examples

```csharp
void Loaded()
{
    Puts($"Plugin {Name} has fully loaded");
}
```
