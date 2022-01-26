---
hide_table_of_contents: true
---

# OnEntityControl

## Usage

* Called when a player tries to remote control an entity
* Returning true or false overrides default behavior

## Examples

```csharp title=""
object OnEntityControl(IRemoteControllable entity)
{
    Puts("OnEntityControl works!");
    return null;
}
```
