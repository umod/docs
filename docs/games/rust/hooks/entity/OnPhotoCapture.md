---
hide_table_of_contents: true
---

# OnPhotoCapture

## Usage

* Called after a photo is taken but before it is given to the player
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPhotoCapture(PhotoEntity photo, Item camera, BasePlayer player, byte[] photoData)
{
    Puts("OnPhotoCapture works!");
    return null;
}
```
