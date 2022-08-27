---
hide_table_of_contents: true
---

# OnPhotoCaptured

## Usage

* Called after a photo is taken
* No return behavior

## Examples

```csharp title=""
void OnPhotoCaptured(PhotoEntity photo, Item camera, BasePlayer player, byte[] photoData)
{
    Puts("OnPhotoCaptured works!");
}
```
