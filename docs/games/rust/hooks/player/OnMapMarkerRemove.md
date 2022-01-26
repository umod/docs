---
hide_table_of_contents: true
---

# OnMapMarkerRemove

## Usage

* Called when trying to remove a marker
* Returning a non-null value cancels default behaviour

## Examples

```csharp title=""
object OnMapMarkerRemove(BasePlayer player, MapNote note)
{
    Puts("OnMapMarkerRemove works!");
    return null;
}
```
